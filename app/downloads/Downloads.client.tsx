"use client";
import { useEffect, useState } from "react";
import {
  FaDownload,
  FaFile,
  FaFileArchive,
  FaFilePdf,
  FaFileImage,
  FaFileWord,
  FaFileExcel,
  FaFileAlt,
} from "react-icons/fa";

interface DownloadFile {
  name: string;
  size: string;
  type: string;
}

const getFileIcon = (filename: string) => {
  const extension = filename.toLowerCase().split(".").pop();

  switch (extension) {
    case "pdf":
      return <FaFilePdf className="text-red-500" />;
    case "zip":
    case "rar":
    case "7z":
      return <FaFileArchive className="text-yellow-500" />;
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "webp":
      return <FaFileImage className="text-green-500" />;
    case "doc":
    case "docx":
      return <FaFileWord className="text-blue-500" />;
    case "xls":
    case "xlsx":
      return <FaFileExcel className="text-green-600" />;
    case "txt":
    case "md":
      return <FaFileAlt className="text-gray-400" />;
    default:
      return <FaFile className="text-gray-400" />;
  }
};

export const DownloadsClient = () => {
  const [files, setFiles] = useState<DownloadFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/api/downloads");
        if (!response.ok) {
          throw new Error("Failed to fetch files");
        }
        const data = await response.json();
        setFiles(data.files);
      } catch (err) {
        setError("Failed to load downloads");
        console.error("Error fetching files:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const handleDownload = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/downloads/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  return (
    <>
      {error ? (
        <div className="text-center py-8">
          <div className="text-red-400 mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors text-sm"
          >
            Try Again
          </button>
        </div>
      ) : files.length === 0 ? (
        <div className="text-center py-8">
          <FaFile className="text-4xl text-gray-500 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-300 mb-2">
            No Files Available
          </h3>
          <p className="text-gray-400 text-sm">
            There are currently no files available for download.
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <h2 className="text-lg font-medium text-white mb-1">
              Available Downloads
            </h2>
            <p className="text-gray-400 text-sm">
              Click on any file to download it to your device.
            </p>
          </div>

          <div className="space-y-0">
            {files.map((file, index) => (
              <div
                key={index}
                className={`p-4 hover:bg-gray-800 transition-colors ${
                  index !== files.length - 1 ? "border-b border-gray-700" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-lg">{getFileIcon(file.name)}</div>
                    <div>
                      <h3 className="text-white font-medium">{file.name}</h3>
                      <div className="flex items-center space-x-3 text-xs text-gray-400">
                        <span>{file.size}</span>
                        <span className="capitalize">{file.type}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownload(file.name)}
                    className="bg-gray-600 cursor-pointer text-white px-3 py-1.5 rounded text-sm hover:bg-gray-500 transition-colors flex items-center space-x-2"
                  >
                    <FaDownload className="text-xs" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">Total files: {files.length}</p>
          </div>
        </>
      )}
    </>
  );
};
