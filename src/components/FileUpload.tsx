"use client";
import { useState } from "react";

interface FileUploadProps {
  uploadedFiles: File[];
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
  accept?: string;
  className?: string;
}

export default function FileUpload({
  uploadedFiles,
  onFilesChange,
  maxFiles = 8,
  accept = "image/*",
  className = "",
}: FileUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/"),
    );

    const newFiles = [...uploadedFiles, ...files].slice(0, maxFiles);
    onFilesChange(newFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).filter((file) =>
        file.type.startsWith("image/"),
      );
      const newFiles = [...uploadedFiles, ...files].slice(0, maxFiles);
      onFilesChange(newFiles);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    onFilesChange(newFiles);
  };

  const getFilePreview = (file: File) => {
    return URL.createObjectURL(file);
  };

  return (
    <div className={className}>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragOver
            ? "border-blue-400 bg-blue-50"
            : "border-gray-200 hover:border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept={accept}
          multiple
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <img
          src="/images/upload-icon.png"
          alt="Upload"
          className="w-12 h-12 mx-auto opacity-60"
        />
        <p className="text-sm text-gray-500 mt-2">
          Arrastra imágenes aquí o <br />
          <label
            htmlFor="file-upload"
            className="text-blue-500 underline cursor-pointer hover:text-blue-600"
          >
            busca archivos
          </label>
        </p>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Imágenes subidas:
          </p>
          <div className="grid grid-cols-4 gap-2">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="relative group">
                <img
                  src={getFilePreview(file)}
                  alt={file.name}
                  className="w-full h-20 object-cover rounded border"
                />
                <button
                  onClick={() => removeFile(index)}
                  className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs px-1 py-0.5 truncate rounded-b opacity-0 group-hover:opacity-100 transition-opacity">
                  {file.name}
                </div>
              </div>
            ))}
            {uploadedFiles.length < maxFiles && (
              <label
                htmlFor="file-upload"
                className="w-full h-20 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-2xl cursor-pointer hover:bg-gray-200 transition-colors"
              >
                +
              </label>
            )}
          </div>
        </div>
      )}

      {uploadedFiles.length === 0 && (
        <div className="mt-4 flex items-center gap-4">
          <label
            htmlFor="file-upload"
            className="w-12 h-12 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xl cursor-pointer hover:bg-gray-200 transition-colors"
          >
            +
          </label>
        </div>
      )}
    </div>
  );
}
