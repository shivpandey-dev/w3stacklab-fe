/**
 * Composed device stack (browser, phone and floating chips). Laid out at a
 * fixed 520 x 460 and scaled down on narrow screens so the overlapping pieces
 * keep their relationships. Decorative, so hidden from assistive tech.
 */
export function DeviceStack() {
  return (
    <div className="flex min-w-0 justify-center" aria-hidden>
      <div className="relative h-[290px] w-[330px] pl-6 min-[460px]:h-[370px] min-[460px]:w-[430px] sm:h-[460px] sm:w-[520px] sm:pl-0">
        <div className="absolute left-6 top-0 h-[460px] w-[520px] origin-top-left scale-[0.6] min-[460px]:scale-[0.78] sm:left-0 sm:scale-100">
          {/* grey stage */}
          <div className="absolute inset-[30px_0_0_40px] rounded-[28px] bg-surface" />

          {/* browser window */}
          <div className="absolute left-0 top-0 w-[330px] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_40px_rgba(20,22,26,0.1)]">
            <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-3">
              <span className="h-[9px] w-[9px] rounded-full bg-brand" />
              <span className="h-[9px] w-[9px] rounded-full bg-line-strong" />
              <span className="h-[9px] w-[9px] rounded-full bg-line-strong" />
              <span className="ml-2.5 font-mono text-xs text-muted">
                app.yourproduct.com
              </span>
            </div>
            <div className="flex flex-col gap-3 p-[18px]">
              <div className="h-3 w-3/5 rounded bg-ink" />
              <div className="flex gap-2.5">
                <div className="h-[62px] flex-1 rounded-lg bg-surface" />
                <div className="h-[62px] flex-1 rounded-lg bg-surface" />
                <div className="h-[62px] flex-1 rounded-lg bg-brand" />
              </div>
              <div className="flex h-[90px] items-end gap-2">
                {[
                  ["38%", "bg-line"],
                  ["55%", "bg-line"],
                  ["46%", "bg-line"],
                  ["78%", "bg-ink"],
                  ["100%", "bg-brand"],
                ].map(([h, c], i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t ${c}`}
                    style={{ height: h }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* floating chips */}
          <div className="chip absolute right-5 top-[-14px] z-[2] flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-[13px] font-semibold shadow-[0_10px_24px_rgba(20,22,26,0.1)]">
            <span className="dot-live h-2 w-2 rounded-full bg-brand" />
            Deployed to production
          </div>
          <div className="chip absolute left-[-34px] top-[190px] z-[2] rounded-[10px] bg-ink px-3.5 py-2.5 font-mono text-xs text-white shadow-[0_12px_28px_rgba(20,22,26,0.25)] [animation-delay:-2s]">
            $ ship --agent<span className="text-brand-light"> ✓</span>
          </div>
          <div className="chip absolute bottom-[26px] left-[70px] z-[2] rounded-xl border border-line bg-white px-3.5 py-2.5 text-[13px] shadow-[0_10px_24px_rgba(20,22,26,0.1)] [animation-delay:-3.5s]">
            <span className="text-muted">Tools connected via</span>{" "}
            <strong className="text-brand">MCP</strong>
          </div>

          {/* phone */}
          <div className="absolute bottom-0 right-0 w-[210px] rounded-[30px] bg-ink p-3 shadow-[0_24px_48px_rgba(20,22,26,0.28)]">
            <div className="flex h-[270px] flex-col gap-2.5 rounded-[20px] bg-white px-3.5 py-4">
              <div className="font-mono text-[11px] tracking-[0.06em] text-muted">
                AI ASSISTANT
              </div>
              <div className="max-w-[150px] self-start rounded-[12px_12px_12px_3px] bg-surface px-3 py-[9px] text-[13px]">
                How can I help your team today?
              </div>
              <div className="max-w-[150px] self-end rounded-[12px_12px_3px_12px] bg-brand px-3 py-[9px] text-[13px] text-white">
                Qualify this new enquiry.
              </div>
              <div className="max-w-[160px] self-start rounded-[12px_12px_12px_3px] bg-surface px-3 py-[9px] text-[13px]">
                Done. High fit. Reply drafted for review.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
