class DataHandler {
  static cameraPermissionGranted() {
    localStorage.setItem("CAM_PERMISSION", "true");
  }

  static cameraPermissionNotGranted() {
    localStorage.setItem("CAM_PERMISSION", "false");
  }

  static isCameraPermissionGranted() {
    return localStorage.getItem("CAM_PERMISSION") === "true";
  }
}

export default DataHandler;
