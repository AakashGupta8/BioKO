import React, { useState, useEffect } from "react";
import { Box, Paper, Typography, Grid, Button } from "@mui/material";
import "./home.css";

const MAX_COUNT = 8;
export default function Home() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const [preview, setPreview] = useState([]);

  const handleFileEvent = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  const handleUploadFiles = (files) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
      return false;
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
    // setUploadedFiles(uploaded);
  };
  useEffect(() => {
    var tempArr = [];
    if (uploadedFiles.length > 0) {
      uploadedFiles.map((item) => {
        const objectUrl = URL.createObjectURL(item);
        tempArr.push(objectUrl);
        return () => URL.revokeObjectURL(item);
      });

      setPreview(tempArr);
    }
    // And revoke on unmount
  }, [uploadedFiles]);

  function toDataURL(url) {
    return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  }

  //   const download = (e) => {
  //     console.log(e.target.href);
  //     fetch(e.target.href, {
  //       method: "GET",
  //       headers: {},
  //     })
  //       .then((response) => {
  //         response.arrayBuffer().then(function (buffer) {
  //           const url = window.URL.createObjectURL(new Blob([buffer]));
  //           const link = document.createElement("a");
  //           link.href = url;
  //           link.setAttribute("download", "image.jpg"); //or any other extension
  //           document.body.appendChild(link);
  //           link.click();
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  async function download(e) {
    // url, name = "download", type = "png"
    console.log(e.target);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = await toDataURL(e.target.src);
    a.download = "download" + "." + "png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <div style={{ marginTop: "50%" }}>
            <Button variant="contained" component="label">
              Hochladen
              <input
                type="file"
                hidden
                multiple
                accept="image/jpeg,image/png,"
                onChange={handleFileEvent}
              ></input>
            </Button>

            <Button variant="contained" component="label">
              Analysen
            </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: "100%",
                height: "82vh",
              },
            }}
          >
            <Paper elevation={3}>
              <Grid
                container
                spacing={2}
                style={{ margin: "14px 0px", width: "100%" }}
              >
                {preview.length > 0 ? (
                  preview.map((item) => {
                    return (
                      <Grid item xs={6}>
                        <img
                          className="upload-img"
                          src={item}
                          href={item}
                          style={{
                            marginRight: "10%",
                            cursor: "pointer",
                            border: "1px solid #1f1f1f",
                          }}
                          onClick={(e) => download(e)}
                          target="_blank"
                          download="file"
                          alt="img"
                        />
                      </Grid>
                    );
                  })
                ) : (
                  <div style={{ justifyContent: "center", display: "flex" }}>
                    {" "}
                    Please upload some images
                  </div>
                )}
                {/* {preview.map((item) => {
                  return (
                    <Grid item xs={3}>
                      <img
                        className="sample-img"
                        src={item}
                        href={item}
                        style={{ marginRight: "10%" }}
                        onClick={(e) => download(e)}
                        target="_blank"
                        download="file"
                        alt=""
                      />
                    </Grid>
                  );
                })} */}
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
