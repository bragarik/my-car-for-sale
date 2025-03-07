import React from "react";
import { Box, Typography, Grid2 as Grid, Paper, Card, CardContent, CardMedia, Container, Divider, Link } from "@mui/material";
import { differenceInMonths, differenceInDays, parse } from "date-fns";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './assets/styles.css';

import TawkToWidget from "./TawkToWidget";
import ImageSlider from "./ImagemSlider";

const CarSalePage: React.FC = () => {

  const calcularDiferenca = (data: string) => {
    const hoje = new Date();
    const dataFormatada = parse(data, "dd/MM/yyyy", new Date());

    const meses = differenceInMonths(hoje, dataFormatada);
    const dias = differenceInDays(hoje, dataFormatada);

    if (meses >= 1) {
      return `${meses} mês${meses > 1 ? "es" : ""}`;
    }

    return `${dias} dia${dias > 1 ? "s" : ""}`;
  };

  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize(); // Abre a tela de chat
    } else {
      alert('O chat ainda não está carregado. Por favor, aguarde.');
    }
  };


  return (
    <Box sx={{
      padding: 2,
      minHeight: "100vh",
      position: "relative",
      background: `linear-gradient(-135deg, rgb(34, 76, 152) 10%, transparent 80%),
		repeating-linear-gradient(45deg, rgba(34, 76, 152, 1) 0%, rgba(31, 48, 94, 0.6) 2%, transparent 2%, transparent 4%),
		repeating-linear-gradient(-45deg, rgba(34, 76, 152, 0.4) 0%, rgba(31, 48, 94, 0.5) 2%, transparent 2%, transparent 4%)`,
      backgroundSize: "150% 150%",
      animation: "gradientBG 50s ease-in-out infinite alternate",
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "url('https://www.transparenttextures.com/patterns/cubes.png') repeat",
        opacity: 0.1,
        zIndex: -1,
      },
      "@keyframes gradientBG": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 25%" },
        "100%": { backgroundPosition: "0% 50%" },
      },
    }}>
      <Container>
        {/* Título */}
        <Typography variant="h3" color="white" textAlign="center" gutterBottom sx={{ textShadow: "1px 1px 1px black, 0px 0px 10px white" }}>
          Venda Particular - T-Cross
        </Typography>

        <Grid container spacing={2} alignItems="stretch">
          {/* Especificações */}
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
            <Grid container spacing={2} alignItems="stretch">
              <Grid size={12}>
                <Paper
                  elevation={3}
                  sx={{ p: 2, height: "100%", boxSizing: "border-box" }}
                >
                  <Typography variant="h6" gutterBottom>
                    Especificações – VW T‑Cross Highline (2019/2020)
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Motorização:</strong> 1.4 TSI turbo flex – 150 cv e 250 Nm
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Transmissão:</strong> Automática de 6 marchas
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Equipamentos de Série:</strong> Bancos revestidos em couro,
                    espelho retrovisor interno eletrocrômico, espelhos externos com
                    rebatimento automático, iluminação ambiente em LED, detector de
                    fadiga, sistema KESSY com partida sem chave, sistema start&stop,
                    sensores de chuva e crepuscular.
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Pacotes Opcionais inclusos:</strong>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    - <strong>Innovation:</strong> Painel digital (Active Info Display),
                    central multimídia Discover Media com tela tátil de 8", comando de
                    voz e entrada USB; <br />
                    - <strong>Sky View:</strong> Teto solar panorâmico; <br />
                    - <strong>Tech &amp; Beats:</strong> Park Assist 3.0, faróis full-LED
                    e sistema de som “Beats” com subwoofer. <br />
                    - <strong>We Connect Go:</strong> Com dispositivo DataPlug para monitoramento do carro pelo smartphone.
                  </Typography>
                  <Typography variant="body1">
                    <strong>Dimensões:</strong> Comprimento ~4,2 m, entre-eixos de 2,65 m,
                    porta-malas entre 373 e 420 litros.
                  </Typography>
                </Paper>
              </Grid>
              <Grid size={12}>
                <Paper
                  elevation={3}
                  sx={{ p: 2, height: "100%", boxSizing: "border-box" }}
                >
                  <Typography variant="h6" gutterBottom>
                    <strong>Dúvidas Frequentes</strong> – Respondidas no Chat
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Km:</strong> 31.000
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Bateria:</strong> Primeira troca a {calcularDiferenca("10/02/2025")}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          {/* Card de Venda */}
          <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                image={`${import.meta.env.BASE_URL}/destaque.jpg`}
                alt="Descrição da imagem do produto"
              />
              <CardContent>
                <Typography variant="h2" component="div">
                  R$ 123.000,00
                </Typography>
                <Divider />
                <Typography variant="h6" marginTop={2} marginBottom={2}>
                  Se você chegou até aqui, é porque já viu o carro pessoalmente e demonstrou interesse.
                </Typography>
                <Typography variant="h6">
                  <strong>Vamos conversar?</strong> Fale comigo através do chat clicando <Link href="#" onClick={(e) => { e.preventDefault(); openChat() }}>aqui</Link> para tirar suas dúvidas, solicitar mais informações ou negociar.
                </Typography>
              </CardContent>
            </Card>
            <Grid size={{ xs: 12, md: 6 }}>
              <TawkToWidget />
            </Grid>
          </Grid>

          {/* Galeria de Fotos */}
          <Grid size={12} order={{ xs: 3, md: 3 }}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Galeria de Fotos
              </Typography>
              <ImageSlider />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CarSalePage;

