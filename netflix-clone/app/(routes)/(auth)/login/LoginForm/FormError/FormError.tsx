import { FormErrorProps } from "./FormError.types";
import { TriangleAlert } from "lucide-react";
export function FormError(props: FormErrorProps) {
    const { message } = props;
    if (!message) return null;
    return (
    <div className="bg-red-600/50 p-3 rounded flex items-center gap-x-2 text-sm text-white">
        <TriangleAlert />
            <p>{message}</p>
    </div>
    )
}