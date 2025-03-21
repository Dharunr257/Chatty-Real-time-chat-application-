// import { Users } from "lucide-react";

// const SidebarSkeleton = () => {
//   // Create 8 skeleton items
//   const skeletonContacts = Array(8).fill(null);

//   return (
//     <aside
//       className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200 bg-base-200"
//     >
//       {/* Header */}
//       <div className="border-b border-base-300 w-full p-5">
//         <div className="flex items-center gap-2">
//           <Users className="w-6 h-6 text-base-content" />
//           <span className="font-medium hidden lg:block text-base-content">Contacts</span>
//         </div>
//       </div>

//       {/* Skeleton Contacts */}
//       <div className="overflow-y-auto w-full py-3">
//         {skeletonContacts.map((_, idx) => (
//           <div key={idx} className="w-full p-3 flex items-center gap-3">
//             {/* Avatar skeleton */}
//             <div className="relative mx-auto lg:mx-0">
//               <div className="bg-base-300 animate-pulse size-12 rounded-full" />
//             </div>

//             {/* User info skeleton - only visible on larger screens */}
//             <div className="hidden lg:block text-left min-w-0 flex-1">
//               <div className="bg-base-300 animate-pulse h-4 w-32 mb-2 rounded" />
//               <div className="bg-base-300 animate-pulse h-3 w-16 rounded" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default SidebarSkeleton;

import React from 'react'

const SidebarSkeleton = () => {
  return (
    <div>SidebarSkeleton</div>
  )
}

export default SidebarSkeleton