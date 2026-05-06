'use client';

interface EmailCaptureFormProps {
  buttonLabel: string;
}

export function EmailCaptureForm({ buttonLabel }: EmailCaptureFormProps) {
  return (
    <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
      <input
        type="email"
        required
        placeholder="your@email.com"
        aria-label="Email address"
        style={{
          background: 'oklch(0.13 0.020 30)',
          border: '1px solid oklch(0.27 0.025 30)',
          color: 'oklch(0.93 0.015 50)',
          borderRadius: '0.5rem',
        }}
        className="w-full px-4 py-3 placeholder:text-[oklch(0.55_0.012_50)] focus:outline-none focus:border-[oklch(0.55_0.17_40)] text-base min-h-[48px]"
      />
      <button type="submit" className="btn-primary press-feedback w-full">
        {buttonLabel}
      </button>
    </form>
  );
}
