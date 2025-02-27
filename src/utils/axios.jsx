import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjdjNGUxNDMzZGNjZWM2YzdmMzcyYzJiNmYwMmQ0NCIsIm5iZiI6MTc0MDYzNzc3Mi40MDk5OTk4LCJzdWIiOiI2N2MwMDY0YzMxYWE1NWE3MTEzNTllYzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M4KdnD5uyQDoscoswX9vxm1a6QMB1dvzQiMX4l2ZF3M'
      }
})

export default instance