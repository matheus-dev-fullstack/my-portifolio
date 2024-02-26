import { Button, Container, Grid, Typography, styled } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download'
import MailOutLineIcon from '@mui/icons-material/MailOutline'

import Avatar from "../../../../assets/images/avatar.jpg"

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "Black",
        height: "100vh"
    }))
    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%"

    }))

    return (
        <>
            <StyledHero>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <StyledImg src={Avatar} />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography color="primary" variant="h1" textAlign="center">Matheus Oliveira</Typography>
                            <Typography color="primary" variant="h2" textAlign="center">I'm a Software Engineer</Typography>
                            <Button>
                                <DownloadIcon />
                                DOWNLOAD CV
                            </Button>
                            <Button>
                                <MailOutLineIcon />
                                CONTACT ME
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>

    )
}

export default Hero