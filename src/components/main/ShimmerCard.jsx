const ShimmerCard = () => {
  return (
    <div className="shimmer-pulse bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div className="h-32 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-4"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
    </div>
  );
};

export default ShimmerCard;
