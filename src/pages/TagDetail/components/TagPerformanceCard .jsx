//

const TagPerformanceCard = ({ title, stats, note }) => {
  return (
    <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      <div className="space-y-4">
        {stats.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-pink-100">{item.label}</span>
            <span className="font-bold text-2xl">{item.value}</span>
          </div>
        ))}
      </div>

      {note && (
        <div className="mt-6 pt-6 border-t border-pink-400">
          <p className="text-sm text-pink-100">{note}</p>
        </div>
      )}
    </div>
  );
};

export default TagPerformanceCard;
