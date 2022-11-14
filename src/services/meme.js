const baseApiUrl = 'https://api.imgflip.com';

export const getMemes = async () => {
  const url = `${baseApiUrl}/get_memes`;
  const response = await fetch(url)
    .then((data) => data.json())
    .then((json) => json.data.memes);
  return response;
};
