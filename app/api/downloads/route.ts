import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface FileInfo {
  name: string;
  size: string;
  type: string;
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const getFileType = (filename: string): string => {
  const extension = filename.toLowerCase().split(".").pop();

  switch (extension) {
    case "pdf":
      return "PDF Document";
    case "zip":
    case "rar":
    case "7z":
      return "Archive";
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "webp":
      return "Image";
    case "doc":
    case "docx":
      return "Word Document";
    case "xls":
    case "xlsx":
      return "Excel Spreadsheet";
    case "ppt":
    case "pptx":
      return "PowerPoint Presentation";
    case "txt":
      return "Text File";
    case "md":
      return "Markdown";
    case "json":
      return "JSON File";
    case "xml":
      return "XML File";
    case "csv":
      return "CSV File";
    case "mp3":
    case "wav":
    case "flac":
      return "Audio File";
    case "mp4":
    case "avi":
    case "mov":
    case "mkv":
      return "Video File";
    default:
      return "File";
  }
};

export async function GET() {
  try {
    const downloadsPath = path.join(process.cwd(), "public", "downloads");

    // Check if the downloads directory exists
    try {
      await fs.access(downloadsPath);
    } catch (error) {
      // If directory doesn't exist, create it
      await fs.mkdir(downloadsPath, { recursive: true });
      return NextResponse.json({
        files: [],
        message: "Downloads directory created but is empty",
      });
    }

    // Read the directory contents
    const fileNames = await fs.readdir(downloadsPath);

    // Filter out directories and hidden files
    const fileStats = await Promise.all(
      fileNames.map(async (fileName) => {
        try {
          const filePath = path.join(downloadsPath, fileName);
          const stats = await fs.stat(filePath);

          // Only include files (not directories)
          if (stats.isFile() && !fileName.startsWith(".")) {
            return {
              name: fileName,
              size: formatFileSize(stats.size),
              type: getFileType(fileName),
              stats,
            };
          }
          return null;
        } catch (error) {
          console.error(`Error reading file ${fileName}:`, error);
          return null;
        }
      })
    );

    // Filter out null values and sort by name
    const files: FileInfo[] = fileStats
      .filter((file): file is NonNullable<typeof file> => file !== null)
      .map(({ name, size, type }) => ({ name, size, type }))
      .sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json({
      files,
      count: files.length,
    });
  } catch (error) {
    console.error("Error reading downloads directory:", error);
    return NextResponse.json(
      {
        error: "Failed to read downloads directory",
        files: [],
      },
      { status: 500 }
    );
  }
}
