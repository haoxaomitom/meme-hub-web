import ViewAllButton from "./ViewAllButton";

const SectionHeader = ({ title, count, showViewAll, onViewAll }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 mt-1">{count} results found</p>
      </div>
      {showViewAll && <ViewAllButton count={count} onClick={onViewAll} />}
    </div>
  );
};

export default SectionHeader;
