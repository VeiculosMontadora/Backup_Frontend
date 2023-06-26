import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import LoadingIconSpin from "../LoadingIconSpin"
import Success from "../../assets/Loaded"
import Failed from "../../assets/Failed"
import PartialFailed from "../../assets/PartialFailed"
import { ProgressProps } from "./types"
import { Wrapper, IconWrapper, Title, LoadingWrapper } from "./styles"

const ProgressIcon = ({ progress }: ProgressProps) => {
  const { t } = useTranslation()

  const text = useMemo(() => {
    return t(`extraction.${progress}`)
  }, [progress, t])

  const image = useMemo(() => {
    switch (progress) {
      case "success":
        return <Success />

      case "partialFail":
        return <PartialFailed />

      case "fail":
        return <Failed />

      default:
        return (
          <LoadingWrapper>
            <LoadingIconSpin size={60} thickness={5.4} />
          </LoadingWrapper>
        )
    }
  }, [progress])

  return (
    <Wrapper>
      <IconWrapper data-testid={progress}>{image}</IconWrapper>
      <Title variant="h2" data-progress={progress}>
        {text}
      </Title>
    </Wrapper>
  )
}

export default ProgressIcon
