/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { CLOUD_NAME, CLOUD_FOLDER_UPLOAD, CLOUD_KEY_PRESET } from './cloudinaryConfig'
import Toast from '@/admin/components/Toast'

export const uploadToCloudinary = ({ file, fileType, successCallback, failureCallback }: any) => {
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${fileType}/upload`
  const data = new FormData()
  data.append('file', file)
  data.append('upload_preset', CLOUD_KEY_PRESET)
  data.append('tags', CLOUD_FOLDER_UPLOAD)
  axios
    .post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => successCallback(response.data))
    .catch((err) => {
      const error = new Error(err)
      Toast({ message: err?.response?.data?.error?.message, position: 'top-right' })
      failureCallback({ event: error })
    })
}
