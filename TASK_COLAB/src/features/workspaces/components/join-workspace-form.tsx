"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle,CardDescription } from "@/components/ui/card"
import { useInviteCode } from "../hooks/use-invite-code";
import { useJoinWorkspace } from "../api/use-join-workspace";
import { useWorkspaceId } from "../hooks/use-workspace-Id";

interface JoinWorkspaceFormProps {
    initialValues:{
        name: string;
    }
}
export const JoinWorkspaceForm = ({initialValues,}: JoinWorkspaceFormProps) => {
    const router = useRouter()
    const workspaceId = useWorkspaceId()
    const inviteCode = useInviteCode()
    const { mutate, isPending} = useJoinWorkspace();

    const onSubmit = () => {
        mutate ({
            param: {workspaceId},
            json: { code: inviteCode },
        },{
            onSuccess: ({data}) => {
                router.push(`/workspaces/${data.$id}`)
            }
        })
    }

    return (
        <Card className="w-full h-full border-none shadow-none">
            <CardHeader className="p-7">
                <CardTitle className="text-xl">Join Workspace</CardTitle>
                <CardDescription className="">
                    You&apos;ve been invited to join <strong>{initialValues.name}</strong> workspace.
                </CardDescription>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator/>
            </div>
            <CardContent className="p-7">
                <div className="flex flex-col lg:flex-row items-center gap-2 justify-between">
                    <Button 
                    variant="secondary"
                    type="button"
                    size="lg"
                    asChild
                    className="w-full lg:w-fit"
                    disabled={isPending}
                    >
                        <Link href="/">
                        Cancel
                        </Link> 
                    </Button>
                    <Button 
                    type="button"
                    size="lg"
                    className="w-full lg:w-fit"
                    onClick={onSubmit}
                    disabled={isPending}>
                        Join Workspace
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}