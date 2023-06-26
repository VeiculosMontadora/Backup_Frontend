export type Progress = "extracting" | "success" | "fail" | "partialFail"

export type ProgressProps = {
  progress: Progress
}
