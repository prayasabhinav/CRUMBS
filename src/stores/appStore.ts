import { create } from 'zustand'
import { ImageGrid, EncodingResult } from '@/types'

interface AppState {
  // UI State
  theme: 'light' | 'dark';
  isOffline: boolean;
  
  // Image Processing State
  currentImage: ImageGrid | null;
  processingQueue: EncodingResult[];
  
  // Camera State
  isCameraActive: boolean;
  cameraStream: MediaStream | null;
  
  // Actions
  setTheme: (theme: 'light' | 'dark') => void;
  setOfflineStatus: (offline: boolean) => void;
  setCurrentImage: (image: ImageGrid | null) => void;
  addToProcessingQueue: (result: EncodingResult) => void;
  setCameraState: (active: boolean, stream?: MediaStream) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  theme: 'light',
  isOffline: false,
  currentImage: null,
  processingQueue: [],
  isCameraActive: false,
  cameraStream: null,

  // Actions
  setTheme: (theme) => set({ theme }),
  setOfflineStatus: (isOffline) => set({ isOffline }),
  setCurrentImage: (currentImage) => set({ currentImage }),
  addToProcessingQueue: (result) => set((state) => ({
    processingQueue: [...state.processingQueue, result]
  })),
  setCameraState: (isCameraActive, cameraStream = undefined) => set({
    isCameraActive,
    cameraStream
  }),
}))