export const fetchDriveFolders = async () => {
  try {
    const response = await fetch('API_ENDPOINT_FOR_GOOGLE_DRIVE_FOLDERS');
    const data = await response.json();
    return data.folders;
  } catch (error) {
    throw new Error('Error fetching folders');
  }
};
