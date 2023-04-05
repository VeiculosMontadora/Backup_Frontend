export type LoadingIconBarProps = {
  /** should bar be static */
  isLoaded: boolean
}

export type Status =
  | /** When file is being send from user to client */ "downloading"
  | /** When client has downloaded the file */ "downloaded"
  | /** While awaiting for server response */ "uploading"
  | /** When server returned response */ "uploaded"

export type FileLoadingProps = {
  /** file name */
  fileName: string

  /** status = which state of the process we are currently (download, loaded, uploaded...) */
  status: Status

  /** has uploaded to server and back */
  isLoaded?: boolean

  /** for the "dowloaded" state */
  handleDeleteClick?: () => void
}
