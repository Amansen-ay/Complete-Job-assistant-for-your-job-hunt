export default function StatCard({ number, label, color }) {
    return (
        <div className="stat-card">

            <h2 style={{ color }}>{number}</h2>

            <p>{label}</p>

        </div>
    );
}