const getBackendEndpoint = () => {
  const dev = import.meta.env.DEV
  const prod = "https://ec2-18-117-98-169.us-east-2.compute.amazonaws.com:8080"
  const local = "https://localhost:8080"

  if (dev) return local

  return prod
}

const endpoint = getBackendEndpoint()

export default endpoint
