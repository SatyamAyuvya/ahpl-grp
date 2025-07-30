export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-blue-700 text-lg font-semibold tracking-wide">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
