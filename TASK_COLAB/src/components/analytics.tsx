import { ProjectAnalyticsResponseType } from "@/features/projects/api/use-get-project-analytics";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { AnalyticsCard } from "./analytics-card";
import { DottedSeparator } from "./dotted-separator";

export const Analytics = ({ data }: ProjectAnalyticsResponseType) => {
  return (
    <ScrollArea className="border rounded-lg w-full whitespace-nowrap shrink-0">
      <div className="flex w-full flex-row">
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Total tasks"
            value={data.taskCount}
            increaseValue={data.taskDifference}
            variant={data.taskDifference > 0 ? "up" : "down"}
          />
          <DottedSeparator direction="vertical"/>
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Assigned tasks"
            value={data.assignedTaskCount}
            increaseValue={data.assignedTaskDifference}
            variant={data.assignedTaskDifference > 0 ? "up" : "down"}
          />
          <DottedSeparator direction="vertical"/>
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Completed tasks"
            value={data.completedTaskCount}
            increaseValue={data.completedTaskDifference}
            variant={data.completedTaskDifference > 0 ? "up" : "down"}
          />
          <DottedSeparator direction="vertical"/>
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Over Due tasks"
            value={data.overdueTaskCount}
            increaseValue={data.overdueTaskDifference}
            variant={data.overdueTaskDifference > 0 ? "up" : "down"}
          />
          <DottedSeparator direction="vertical"/>
        </div>
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Incomplete tasks"
            value={data.incompleteTaskCount}
            increaseValue={data.incompleteTaskDifference}
            variant={data.incompleteTaskDifference > 0 ? "up" : "down"}
          />
          <DottedSeparator direction="vertical"/>
        </div>
      </div>
      <ScrollBar orientation="horizontal"/>
    </ScrollArea>
  );
};
