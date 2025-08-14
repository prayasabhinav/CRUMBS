// Core image grid types
export interface GridPixel {
  x: number;
  y: number;
  color: string;
}

export interface ImageGrid {
  width: number;
  height: number;
  background: string;
  pixels: GridPixel[];
}

export interface EncodingResult {
  data: ImageGrid;
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
  encoding: 'sparse' | 'rle' | 'palette';
}

export interface CameraCapture {
  id: string;
  timestamp: number;
  originalData: ImageData;
  encodedData: ImageGrid;
  metadata: {
    deviceType: string;
    resolution: string;
    encoding: string;
    compressionRatio: number;
  };
}