import styled from "styled-components"
import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`

export const NotFoundText = styled(Typography)`
  color: black;
`

export const LinkClean = styled(Link)`
  text-decoration: none;
  margin-top: 1rem;
`
