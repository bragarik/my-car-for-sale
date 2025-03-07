import React, { useState, useRef } from 'react';
import { Dialog, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageSlider: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string>('');
    const [scale, setScale] = useState<number>(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
    const [touchStartDistance, setTouchStartDistance] = useState<number | null>(null);

    const dialogRef = useRef<HTMLDivElement>(null);

    const images = import.meta.glob<{ default: string }>('/src/assets/car/*.jpg', { eager: true });
    const imageList = Object.values(images).map((img) => img.default);

    const handleOpen = (imgUrl: string) => {
        setCurrentImage(imgUrl);
        setScale(1);
        setPosition({ x: 0, y: 0 });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentImage('');
    };

    const clampPosition = (x: number, y: number) => {
        if (!dialogRef.current) return { x, y };

        const containerWidth = dialogRef.current.clientWidth;
        const containerHeight = dialogRef.current.clientHeight;

        const imageWidth = containerWidth * scale;
        const imageHeight = containerHeight * scale;

        const maxX = Math.max((imageWidth - containerWidth) / 2, 0);
        const maxY = Math.max((imageHeight - containerHeight) / 2, 0);

        return {
            x: Math.min(Math.max(x, -maxX), maxX),
            y: Math.min(Math.max(y, -maxY), maxY),
        };
    };

    const zoomAtPoint = (newScale: number, pointX: number, pointY: number) => {
        if (!dialogRef.current) return;

        const scaleFactor = newScale / scale;
        const newX = pointX - (pointX - position.x) * scaleFactor;
        const newY = pointY - (pointY - position.y) * scaleFactor;

        setScale(newScale);
        setPosition(clampPosition(newX, newY));
    };

    const handleZoomIn = (e?: React.MouseEvent) => {
        if (!dialogRef.current) return;

        const rect = dialogRef.current.getBoundingClientRect();
        const pointX = e ? e.clientX - rect.left : rect.width / 2;
        const pointY = e ? e.clientY - rect.top : rect.height / 2;

        zoomAtPoint(Math.min(scale + 0.2, 3), pointX, pointY);
    };

    const handleZoomOut = (e?: React.MouseEvent) => {
        if (!dialogRef.current) return;

        const rect = dialogRef.current.getBoundingClientRect();
        const pointX = e ? e.clientX - rect.left : rect.width / 2;
        const pointY = e ? e.clientY - rect.top : rect.height / 2;

        zoomAtPoint(Math.max(scale - 0.2, 1), pointX, pointY);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || scale === 1) return;

        const newX = e.clientX - startPosition.x;
        const newY = e.clientY - startPosition.y;

        setPosition(clampPosition(newX, newY));
    };

    const handleMouseUp = () => setIsDragging(false);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 2) {
            setTouchStartDistance(getDistance(e.touches[0], e.touches[1]));
        } else if (e.touches.length === 1) {
            const touch = e.touches[0];
            setIsDragging(true);
            setStartPosition({ x: touch.clientX - position.x, y: touch.clientY - position.y });
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 2 && touchStartDistance) {
            const newDistance = getDistance(e.touches[0], e.touches[1]);
            const newScale = Math.min(Math.max(scale * (newDistance / touchStartDistance), 1), 3);

            const rect = dialogRef.current?.getBoundingClientRect();
            if (rect) {
                const pointX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
                const pointY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;

                zoomAtPoint(newScale, pointX, pointY);
            }

            setTouchStartDistance(newDistance);
        } else if (e.touches.length === 1 && isDragging && scale > 1) {
            const touch = e.touches[0];
            const newX = touch.clientX - startPosition.x;
            const newY = touch.clientY - startPosition.y;

            setPosition(clampPosition(newX, newY));
        }
    };

    const handleTouchEnd = () => setIsDragging(false);

    const getDistance = (touch1: React.Touch, touch2: React.Touch) => {
        return Math.sqrt(
            Math.pow(touch2.clientX - touch1.clientX, 2) +
            Math.pow(touch2.clientY - touch1.clientY, 2)
        );
    };

    return (
        <div id="slider">
            <Swiper modules={[Pagination, Navigation]} pagination={{ type: 'bullets' }} navigation autoHeight>
                {imageList.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <img src={img} alt={`Imagem ${index + 1}`} style={{ display: 'block', width: '100%' }} />
                            <IconButton
                                onClick={() => handleOpen(img)}
                                style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'rgba(255,255,255,0.7)' }}
                            >
                                <ZoomInIcon />
                            </IconButton>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Dialog open={open} onClose={handleClose} maxWidth="lg">
                <div
                    ref={dialogRef}
                    style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%', touchAction: 'none' }}
                >
                    <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 2 }}>
                        <IconButton onClick={(e) => handleZoomIn(e)} style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', margin: 4 }}>
                            <AddIcon />
                        </IconButton>
                        <IconButton onClick={(e) => handleZoomOut(e)} style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', margin: 4 }}>
                            <RemoveIcon />
                        </IconButton>
                    </div>

                    <img
                        src={currentImage}
                        alt="Imagem ampliada"
                        draggable={false}
                        style={{ width: '100%', height: 'auto', transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default', userSelect: 'none' }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    />
                </div>
            </Dialog>
        </div>
    );
};

export default ImageSlider;
