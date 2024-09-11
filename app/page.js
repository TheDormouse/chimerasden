import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="card fey-queen">
        <h1>Join One of Our Tables</h1>
        <p>Get access to the full D&D experience with our StartPlaying tables</p>
        <a href="https://startplaying.games/gm/dmjoe" target="_blank" rel="noopener noreferrer" className="button">
          <Image src="https://startplaying.games/assets/logo/logo-wordmark.svg" alt="StartPlaying Logo" width={200} height={50} />
        </a>
      </div>
      <div className="card mistress">
        <h1>Exclusive Content on Patreon</h1>
        <p>Get early access to our custom tokens, maps, and music.</p>
        <a href="https://patreon.com/chimeras" target="_blank" rel="noopener noreferrer" className="button">Join our Patreon</a>
      </div>
      <div className="card pheonix">
        <h1>Join Our Discord Community</h1>
        <p>Connect with fellow adventurers, share stories, and stay updated on our latest offerings.</p>
        <a href="https://discord.gg/chimerasden" target="_blank" rel="noopener noreferrer" className="button">Join Discord</a>
      </div>
      <div className="card col-3">
        <div className="card-content">
          <h1>Immersive D&D Adventures with Chimera's Den</h1>
          <p>Experience unparalleled tabletop roleplaying with Chimera's Den. Our FoundryVTT-powered games offer:</p>
          <ul>
            <li>Custom artwork, maps, and tokens</li>
            <li>Professional DMs running tailored sessions</li>
            <li>Immersive soundscapes and music</li>
            <li>Vibrant Discord community</li>
          </ul>
          <p>From novices to veterans, our curated adventures and detailed campaign settings await. Join Chimera's Den for unforgettable D&D experiences where your story comes alive.</p>
          <a href="https://startplaying.games/gm/dmjoe" target="_blank" rel="noopener noreferrer" className="button">Start Your Adventure</a>
          <div className="media-container">
            <Link href="https://www.patreon.com/chimeras/shop" target="_blank" rel="noopener noreferrer" className="shop-link">
              <Image src="/shopimage.png" alt="Chimera's Den Shop" width={500} height={300} className="shop-image" />
            </Link>
            <iframe src="https://discord.com/widget?id=1105191370303475712&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
