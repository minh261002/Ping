"use client";

import { Button } from "@workspace/ui/components/button";
import { useVapi } from "@/modules/widget/hooks/use-vapi";

export default function Page() {
  const {
    isConnected,
    isConnecting,
    isSpeaking,
    transcript,
    startCall,
    endCall,
  } = useVapi();

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World Widget</h1>
        <Button size="sm" onClick={startCall}>
          Start Call
        </Button>
        <Button variant={"destructive"} size="sm" onClick={endCall}>
          End Call
        </Button>
        <p>is connected: {isConnected ? "Yes" : "No"}</p>
        <p>is connecting: {isConnecting ? "Yes" : "No"}</p>
        <p>is speaking: {isSpeaking ? "Yes" : "No"}</p>
        <div className="w-96 h-48 p-2 border overflow-y-auto">
          {JSON.stringify(transcript, null, 2)}
        </div>
      </div>
    </div>
  );
}
