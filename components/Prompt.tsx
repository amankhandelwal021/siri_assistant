"use client";

import React, { useState } from "react";
import { PiMicrophoneFill } from "react-icons/pi";
import { LuImagePlus } from "react-icons/lu";
import { VscSend } from "react-icons/vsc";


const Prompt = ({ prompt, setPrompt, setIsSearch }: any) => {

  // const apiUrl = "https://api.openai.com/v1/audio/transcriptions";

  // const model = "whisper-1";
  // const responseFormat = "text";

  const [recording, setRecording] = useState<any>(false);
  const [audioStream, setAudioStream] = useState<any>(null);
  const [mediaRecorder, setMediaRecorder] = useState<any>(null);
  const [audioChunks, setAudioChunks] = useState<any>([]);
  const [mimeType, setMimeType] = useState<any>(null);


  const startRecording = async () => {
    try {
      const stream: any = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      const recorder: any = new MediaRecorder(stream, { mimeType: mimeType });

      setAudioStream(stream);
      setMediaRecorder(recorder);

      recorder.ondataavailable = (e: any) => {
        setAudioChunks((chunks: any) => [...chunks, e.data]);
        setMimeType(e.data.type);
      };

      recorder.start();
      setRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.stop();
      audioStream.getTracks().forEach((track: any) => track.stop());
      setRecording(false);
    }
  };

  const playRecording = () => {
    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  };

  // const generateText = async () => {

  //   var myHeaders = new Headers();
  //   myHeaders.append("Authorization", `Bearer ${apiKey}`);
  //   myHeaders.append("Content-Type", "multipart/form-data");

  //   var formdata:any = new FormData();

  //   let file = {
  //     uri: "/public/test_audio.oog",
  //   };

  //   formdata.append("file", {
  //     ...file,
  //     type: mimeType,
  //     name: file.uri.split("/").pop(),
  //   });
  //   formdata.append("model", model);
  //   formdata.append("response_format", responseFormat);

  //   var requestOptions:any = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   fetch(`${apiUrl}`, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  return (
    <div className="flex items-center justify-start space-x-5 bg-[#1E1F20] px-7 py-2 w-[70%] rounded-full">
      <input
        type="text"
        placeholder="Enter your prompt here..."
        value={prompt}
        onChange={(e: any) => setPrompt(e.target.value)}
        className="placeholder:text-[#8d8d8f] outline-none bg-transparent w-full text-white"
      />
      <div className="flex justify-center items-center space-x-2">
        <div className="text-[#C4C7C5] flex items-center space-x-2 hover:text-white hover:bg-[#444746] hover:cursor-pointer duration-300 p-2.5 rounded-full">
          <PiMicrophoneFill className="text-2xl" onClick={() => { recording ? stopRecording() : startRecording() }} />
        </div>{" "}
        <div className="text-[#C4C7C5] flex items-center space-x-2 hover:text-white hover:bg-[#444746] hover:cursor-pointer duration-300 p-2.5 rounded-full">
          <LuImagePlus className="text-2xl" />
        </div>
        {prompt && (
          <div className="text-[#C4C7C5] flex items-center space-x-2 hover:text-white hover:bg-[#444746] hover:cursor-pointer duration-300 p-2.5 rounded-full"
            onClick={() => {
              setIsSearch(true)
            }}
          >
            <VscSend className="text-2xl" />
          </div>
        )}
      </div>

      {/* <div>
        <button onClick={playRecording} disabled={audioChunks.length === 0}>
          Play
        </button>
      </div> */}
    </div>
  );
};

export default Prompt;
