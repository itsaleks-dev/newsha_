import { useParams, Navigate } from "react-router-dom";

import { ERROR_CONTENT, ErrorCode } from "./config";

import * as S from "./ErrorPage.styled";

type Params = {
  code?: ErrorCode;
};

export function ErrorPage() {
  const { code } = useParams<Params>();

  if (!code || !(code in ERROR_CONTENT)) {
    return <Navigate to="/error/404" replace />;
  }

  const content = ERROR_CONTENT[code];

  return (
    <S.Page role="alert" aria-labelledby="error-title">
      <S.Box>
        <S.Code>{content.code}</S.Code>

        <S.Title id="error-title">{content.title}</S.Title>

        <S.Description>{content.description}</S.Description>

        <S.Actions>
          {content.actions.map(({ label, to, primary }) => (
            <S.Button key={to} to={to} {...(primary ? { $primary: true } : {})} aria-label={label}>
              {label}
            </S.Button>
          ))}
        </S.Actions>
      </S.Box>
    </S.Page>
  );
}
