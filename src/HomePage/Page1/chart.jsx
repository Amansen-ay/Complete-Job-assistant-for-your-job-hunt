import './chart.css'

export default function SimpleDonut() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      
      <div className="donut"></div>

      <div>
        <div className="legend-item">
          <span className="dot blue"></span> Google (6)
        </div>
        <div className="legend-item">
          <span className="dot green"></span> Spotify (4)
        </div>
        <div className="legend-item">
          <span className="dot red"></span> Airbnb (3)
        </div>
        <div className="legend-item">
          <span className="dot orange"></span> Microsoft (2)
        </div>
        <div className="legend-item">
          <span className="dot yellow"></span> Others (13)
        </div>
      </div>

    </div>
  );
}