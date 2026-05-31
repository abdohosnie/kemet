import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs' // 👈 Switched to nodejs runtime to safely access local fs pipelines
export const alt = 'KEMET — An Interactive Encyclopedia of Ancient Egypt'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
    // Read localized true-type font files safely from your internal server public tree
    const displayFontPath = path.join(process.cwd(), 'public/fonts/CormorantGaramond-Light.ttf')
    const scFontPath = path.join(process.cwd(), 'public/fonts/CormorantSC-Light.ttf')

    const displayFontData = fs.readFileSync(displayFontPath)
    const scFontData = fs.readFileSync(scFontPath)

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#0a0a08',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '80px',
                    border: '1px solid rgba(201, 148, 58, 0.2)',
                    position: 'relative',
                }}
            >
                {/* Subtle geometric framing */}
                <div
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        right: '20px',
                        bottom: '20px',
                        border: '1px solid rgba(201, 148, 58, 0.05)',
                    }}
                />

                {/* Central Core Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <span
                        style={{
                            fontFamily: 'Cormorant SC',
                            fontSize: '14px',
                            letterSpacing: '0.3em',
                            color: '#8c764d',
                            textTransform: 'uppercase',
                            marginBottom: '10px',
                        }}
                    >
                        Interactive Chronology
                    </span>

                    <h1
                        style={{
                            fontFamily: 'Cormorant Garamond',
                            fontSize: '88px',
                            fontWeight: 300,
                            color: '#f5eee0',
                            letterSpacing: '0.05em',
                            margin: '10px 0 20px 0',
                        }}
                    >
                        KEMET
                    </h1>

                    {/* Decorative Gold Divider line */}
                    <div
                        style={{
                            width: '180px',
                            height: '1px',
                            background: 'linear-gradient(90deg, transparent, #c9943a, transparent)',
                            marginBottom: '25px',
                        }}
                    />

                    <p
                        style={{
                            fontFamily: 'Cormorant Garamond',
                            fontStyle: 'italic',
                            fontSize: '24px',
                            color: '#a3967d',
                            maxWidth: '750px',
                            lineHeight: 1.6,
                        }}
                    >
                        A premium, cinematic exploration of historical eras, royal dynasties, priority pharaohs, and grand monuments of the Nile Valley.
                    </p>
                </div>

                {/* Lower Branding Flag */}
                <span
                    style={{
                        position: 'absolute',
                        bottom: '50px',
                        fontFamily: 'Cormorant SC',
                        fontSize: '11px',
                        letterSpacing: '0.25em',
                        color: 'rgba(163, 150, 125, 0.4)',
                        textTransform: 'uppercase',
                    }}
                >
                    kemet.encyclopedia — © 2026
                </span>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'Cormorant Garamond',
                    data: displayFontData,
                    style: 'normal',
                    weight: 300,
                },
                {
                    name: 'Cormorant SC',
                    data: scFontData,
                    style: 'normal',
                    weight: 300,
                },
            ],
        }
    )
}
