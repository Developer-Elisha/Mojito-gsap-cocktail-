import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "../../constants"
import { SplitText } from "gsap/all"
import gsap from "gsap"

const Contact = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center'
            },
            ease: 'power1.inOut'
        })

        timeline
        .from(titleSplit.words, {
            opacity: 0, yPercent: 100, stagger: 0.02
        })
        .from(`#contact h3, #contact p`, {
            opacity: 0, yPercent: 100, stagger: 0.02
        })
        .to(`#f-right-leaf`, {
            y: '-50', duration: 1, ease: 'power1.inOut'
        })
        .to(`#f-left-leaf`, {
            y: '-50', duration: 1, ease: 'power1.inOut'
        }, '<')
    })
    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
            <img src="/images/footer-left-leaf.png" alt="leaf-leaf" id="f-left-leaf" />

            <div className="content">
                <h2>Where to Find Us</h2>

                <div>
                    <h3>Visit Us</h3>
                    <p>123 Main St, Karachi, PK 12345</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>123 456-7891</p>
                    <p>elisha@cocktail.com</p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day}: {time.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                        {socials.map((socials) => (
                            <a
                                key={socials.name}
                                href={socials.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={socials.name}>
                                <img src={socials.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Contact