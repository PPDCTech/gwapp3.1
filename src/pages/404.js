import { useNavigate} from "react-router-dom";
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';
import { Box, Button, Container, SvgIcon, Typography } from '@mui/material';
import { useNProgress } from "../hooks/use-nprogress";

const Error = () => {
  useNProgress();
  const navigate = useNavigate();

  // go back to previous page
  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box
              sx={{
                mb: 3,
                textAlign: 'center'
              }}
            >
              <img
                alt="Under development"
                src="/assets/errors/error-404.png"
                style={{
                  display: 'inline-block',
                  maxWidth: '100%',
                  width: 400
                }}
              />
            </Box>
            <Typography
              align="center"
              sx={{ mb: 3 }}
              variant="h3"
            >
              404: The page you are looking for isn’t here
            </Typography>
            <Typography
              align="center"
              color="text.secondary"
              variant="body1"
            >
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
            <Button
                onClick={() => goBack()}
              startIcon={(
                <SvgIcon fontSize="small">
                  <ArrowLeftIcon />
                </SvgIcon>
              )}
              sx={{ mt: 3 }}
              variant="contained"
            >
              Go back to dashboard
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Error;
