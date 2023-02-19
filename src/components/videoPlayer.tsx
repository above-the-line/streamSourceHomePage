import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

interface VideoProps {
    videoId: string;
    slickNext: () => void;
    slickPrev: () => void;
}

const VideoPlayer: React.FC<VideoProps> = ({ videoId, slickNext, slickPrev }) => {
    const playerRef = useRef<any>(null);

    useEffect(() => {
        const player = playerRef.current.getInternalPlayer();
        player.pauseVideo();
    }, []);

    const onReady = (event: any) => {
        const player = event.target;
        player.playVideo();
    };

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            enablejsapi: 1,
        },
    };

    return (
        <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
            onStateChange={() => null}
            ref={playerRef}
        />
    );
}

export default React.memo(VideoPlayer);