export type Status =
  | /** When file is being send from user to client */ "downloading"
  | /** When client has downloaded the file */ "downloaded"
  | /** While awaiting for server response */ "uploading"
  | /** When server returned response */ "uploaded"
  | /** Case something goes wrong */ "failed"

export type FileLoadingProps = {
  /** file name */
  fileName: string

  /** status = which state of the process we are currently (download, loaded, uploaded...) */
  status: Status

  /** has uploaded to server and back */
  isLoaded?: boolean

  /** index of the file in the array */
  index?: number

  /** for the "dowloaded" state */
  handleDeleteClick?: (index: number) => void
}
