import { useState } from "react";

export function usePagination({ limit, total }) {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(limit);

  const handleNext = () => {
    if (to < total) {
      setFrom(from + limit);
      setTo(to + limit);
    }
  };

  const handlePrev = () => {
    if (from > 0 && from - limit >= 0) {
      setFrom(from - limit);
      setTo(to - limit);
    }
  };

  return { from, to, handleNext, handlePrev };
}
