import React, { useState } from "react";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const AvailabilityInput = ({ availability, setAvailability }) => {
  const [selectedDays, setSelectedDays] = useState(() => {
    const map = {};
    WEEK_DAYS.forEach((d) => (map[d] = []));
    return map;
  });

  const handleDayToggle = (day) => {
    if (availability.some((a) => a.day === day)) {
      // Remove day
      setAvailability((prev) => prev.filter((a) => a.day !== day));
      setSelectedDays((prev) => ({ ...prev, [day]: [] }));
    } else {
      // Add day
      setAvailability((prev) => [...prev, { day, timeSlots: [] }]);
    }
  };

  const handleTimeSlotChange = (day, index, field, value) => {
    const updatedDay = availability.find((a) => a.day === day);
    const timeSlot = updatedDay.timeSlots[index] || "";

    const [from, to] = timeSlot.split("-");
    const newTimeSlot = field === "from" ? `${value}-${to || ""}` : `${from || ""}-${value}`;

    const updatedTimeSlots = [...updatedDay.timeSlots];
    updatedTimeSlots[index] = newTimeSlot;

    const updatedAvailability = availability.map((a) =>
      a.day === day ? { ...a, timeSlots: updatedTimeSlots } : a
    );
    setAvailability(updatedAvailability);
  };

  const addTimeSlot = (day) => {
    const updatedAvailability = availability.map((a) =>
      a.day === day ? { ...a, timeSlots: [...a.timeSlots, ""] } : a
    );
    setAvailability(updatedAvailability);
  };

  const removeTimeSlot = (day, index) => {
    const updatedAvailability = availability.map((a) => {
      if (a.day !== day) return a;
      const newSlots = [...a.timeSlots];
      newSlots.splice(index, 1);
      return { ...a, timeSlots: newSlots };
    });
    setAvailability(updatedAvailability);
  };

  const isSelected = (day) => availability.some((a) => a.day === day);

  return (
    <div className="md:col-span-2">
      <label className="block mb-1 font-medium text-main-font">Availability</label>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
        {WEEK_DAYS.map((day) => (
          <label key={day} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isSelected(day)}
              onChange={() => handleDayToggle(day)}
            />
            {day}
          </label>
        ))}
      </div>

      {availability.map(({ day, timeSlots }, dIdx) => (
        <div key={day} className="mb-6 border rounded-lg p-4 bg-gray-50">
          <h4 className="font-semibold text-main-font mb-2">{day}</h4>
          {timeSlots.map((slot, i) => {
            const [from, to] = slot.split("-");
            return (
              <div key={i} className="flex items-center gap-2 mb-2">
                <label className="text-sm">From:</label>
                <input
                  type="time"
                  value={from || ""}
                  onChange={(e) => handleTimeSlotChange(day, i, "from", e.target.value)}
                  className="border px-2 py-1 rounded"
                  required
                />
                <label className="text-sm">To:</label>
                <input
                  type="time"
                  value={to || ""}
                  onChange={(e) => handleTimeSlotChange(day, i, "to", e.target.value)}
                  className="border px-2 py-1 rounded"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeTimeSlot(day, i)}
                  className="text-tertiary-font text-sm"
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            type="button"
            onClick={() => addTimeSlot(day)}
            className="text-blue-600 text-sm mt-2"
          >
            + Add Time Slot
          </button>
        </div>
      ))}
    </div>
  );
};

export default AvailabilityInput;
