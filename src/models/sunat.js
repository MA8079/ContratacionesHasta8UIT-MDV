const getDataByRuc = async (ruc) => {
  //const token = "apis-token-8854.rgkYBoGmcjD1M92DakOBmXf-M8RDyadm";
  const token ="apis-token-9942.RQRwHfNqNvxFbQg4HOkStMbCzg0s6t04"

  const response = await fetch(
    `https://api.apis.net.pe/v2/sunat/ruc/full?numero=${ruc}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  //console.log(result);
  return result;
};

module.exports = { getDataByRuc };
