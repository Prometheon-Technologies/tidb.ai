import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, Loader2Icon, PencilIcon } from 'lucide-react';

export interface EditingButtonProps {
  editing: boolean;
  onEnterEntitySubgraph?: () => void;
  onStartEdit: () => void;
  onSave: () => void;
  onReset: () => void;
  busy: boolean;
}

export function EditingButton ({ onEnterEntitySubgraph, editing, onStartEdit, onReset, onSave, busy }: EditingButtonProps) {
  return editing
    ? (
      <div className="flex gap-2 items-center">
        <Button
          size="sm"
          disabled={busy}
          onClick={onSave}>
          {busy && <Loader2Icon className="w-3 h-3 mr-1 animate-spin repeat-infinite" />}
          Save
        </Button>
        <Button
          size="sm"
          variant="ghost"
          disabled={busy}
          onClick={onReset}>
          exit
        </Button>
      </div>
    )
    : (
      <div className="flex gap-1 items-center">
        <Button size="sm" variant="default" onClick={onStartEdit}>
          <PencilIcon className="w-3 h-3 mr-2" />
          Edit
        </Button>
        {onEnterEntitySubgraph && <Button size="sm" variant="secondary" onClick={onEnterEntitySubgraph}>
          <ExternalLinkIcon className="w-3 h-3 mr-2" />
          Subgraph
        </Button>}
      </div>
    );
}