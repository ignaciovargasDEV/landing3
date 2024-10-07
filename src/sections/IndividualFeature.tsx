"use client";

import FeatureIcon from "@/assets/ecosystem.svg";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const IndividualFeature = ({
    key,
    title,
    description,
}: {
    key: number;
    title: string;
    description: string;
}) => {
    const offSetX = useMotionValue(-100);
    const offSetY = useMotionValue(-100);

    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offSetX}px ${offSetY}px, black, transparent)`;

    const border = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return;

            const borderRect = border.current?.getBoundingClientRect();

            offSetX.set(e.x - borderRect.x);
            offSetY.set(e.y - borderRect.y);
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    });

    return (
        <li
            key={key}
            className="relative px-5 py-10 max-w-[330px] h-[312px] lg:h-auto mx-auto flex flex-col justify-center items-center gap-y-5 border-[1px] rounded-xl"
            style={{
                backgroundColor: 'rgba(0, 131, 164, 0.1)', // Fondo azul claro
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Sombra suave
                borderColor: 'rgba(0, 131, 164, 0.5)', // Borde azul
            }}
        >
            <motion.div
                ref={border}
                className="absolute inset-0 border-2 rounded-xl"
                style={{
                    borderColor: 'rgba(0, 131, 164, 1)', // Color del borde
                    maskImage: maskImage,
                    WebkitMaskImage: maskImage,
                }}
            ></motion.div>
            <figure>
                <FeatureIcon />
            </figure>
            <article>
                <h3 className="font-bold text-center" style={{ color: 'rgba(0, 131, 164, 1)' }}>{title}</h3>
                <p className="text-center pt-2" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>{description}</p>
            </article>
        </li>
    );
};
