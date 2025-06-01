export default function AddComfortToYourLiving() {
  return (
    <section className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Add Comfort To Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#82a6b1] to-[#6b9aa6]">
              Living
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Design your space for comfort. It&apos;s our inspiration and your
            everyday joy.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#ede0d4] to-[#e6ccb2] p-8 rounded-2xl shadow-lg border border-[#dedbd8]">
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-bold text-gray-800">
              Everyone has an innate desire
            </span>{" "}
            to shape and arrange their surroundings in a way that brings{" "}
            <span className="font-bold text-[#82a6b1]">
              comfort, beauty, and a sense of belonging
            </span>
            . That timeless need is what inspires{" "}
            <span className="font-bold text-gray-800">
              every piece we create
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
