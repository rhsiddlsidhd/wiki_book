"use client";

import { useRouter, usePathname } from "next/navigation";
import FilterGroup from "@/app/components/molecule/FilterGroup";
import { Category, Condition } from "@/app/types/data";

type Props = {
  slug: Category[];
  conditions: Condition[];
};

const FilterGroupWithRouter = ({ slug, conditions }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (selected: string[]) => {
    const query = new URLSearchParams();
    slug.forEach((s) => query.append("slug", s));
    selected.forEach((c) => query.append("condition", c));
    router.push(`${pathname}?${query.toString()}`);
  };

  return (
    <FilterGroup
      title="상품 상태"
      items={[
        { label: "새 상품", name: "new" },
        { label: "중고 상품", name: "used" },
      ]}
      value={conditions}
      onChange={handleChange}
    />
  );
};

export default FilterGroupWithRouter;
