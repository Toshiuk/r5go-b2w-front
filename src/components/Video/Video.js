import React, { useState, useEffect } from "react";
import Quagga from "quagga";
import { withRouter, useHistory } from "react-router";

import BarcodeInputField from "../barcodeInputField";

import VideoSkeleton from "./Video.skeleton";

import "./video.css";

const Video = () => {
  const history = useHistory();

  const [videoInit, setVideoInit] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const onInitSuccess = () => {
    Quagga.start();
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const line = [
      {
        x: 0,
        y: 240
      },
      {
        x: 640,
        y: 240
      }
    ];
    Quagga.ImageDebug.drawPath(line, { x: "x", y: "y" }, drawingCtx, {
      color: "#52FF00",
      lineWidth: 6
    });
    setVideoInit(true);
  };

  const onDetected = result => {
    Quagga.stop();
    Quagga.offDetected(onDetected);
    history.push(`/product/${result.codeResult.code}`);
  };

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector("#video")
          },

          numOfWorkers: 6,
          locate: true,
          frequency: 10,
          decoder: {
            readers: ["ean_reader", "upc_reader", "code_128_reader"]
          }
        },
        err => {
          if (err) {
            setVideoError(true);
            return;
          }
          onInitSuccess();
        }
      );

      Quagga.onDetected(onDetected);
    }
  }, []);

  return (
    <div className="video__page">
      <div className="video__overlay" />
      <div className="video__explanation">
        <p>
          Escaneie o codigo de barras e compre agora!!{" "}
          <span role="img" aria-label="shopping cart">
            🛒
          </span>
        </p>
      </div>
      <div className="video__container">
        {videoError ? (
          <div className="skeleton__unsopported">
            <div>
              <p>
                Seu dispositivo nao tem acesso a camera ou algo deu errado{" "}
                <span role="img" aria-label="thinking-face">
                  🤔
                </span>
              </p>
              <p>Entre com o codigo de barras abaixo</p>
              <BarcodeInputField />
            </div>
          </div>
        ) : (
          <div>
            <div className="video" id="video" />
            {videoInit ? "" : <VideoSkeleton />}
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Video);
