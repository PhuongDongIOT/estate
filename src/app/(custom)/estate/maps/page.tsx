import * as React from "react";
import { LobbySkeleton } from "../../_components/lobby-skeleton";
import { MapComponent } from "@/components/organims/map-component";
import MapDetail from "../../_components/map-detail";
import SearchFillter from "../../_components/search-filtter";

export default async function IndexPage() {

  return (
    <React.Suspense fallback={<LobbySkeleton />}>
      <div className="mx-auto w-full">
        {/* <div className="mx-auto max-w-5xl">
        </div> */}
        <div className="flex flex-col-reverse flex-auto md:flex-row">
          {/* <div className="w-full">

            <SearchFillter />
            <MapDetail />
          </div> */}
          <MapComponent />
        </div>
      </div>
    </React.Suspense>
  )
}
