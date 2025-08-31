import React, { useState } from "react";
import type { User } from "../../api/userService";

export type UserFormProps = {
  initial?: User;
  onSubmit: (u: User) => Promise<void> | void;
  onCancel?: () => void;
};

export default function UserForm({ initial, onSubmit, onCancel }: UserFormProps) {
  const [form, setForm] = useState<User>({
    name: initial?.name ?? "",
    email: initial?.email ?? "",
    phone: initial?.phone ?? "",
    username: initial?.username ?? "",
    website: initial?.website ?? "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.name || !form.email || !form.phone) {
      setError("Name, Email and Phone are required.");
      return;
    }
    try {
      setSubmitting(true);
      await onSubmit(form);
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="user-form">
      {error && <div className="mb-12"><span className="sr-only">Error:</span></div>}
      {error && <div className="mb-12" style={{ marginBottom: 12 }}><div role="alert" style={{ background: "#fee2e2", color: "#991b1b", border: "1px solid #fecaca", borderRadius: 12, padding: "10px 12px", fontSize: 14 }}>{error}</div></div>}
      <div className="grid">
        <label>
          <span>Name*</span>
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </label>
        <label>
          <span>Username</span>
          <input value={form.username ?? ""} onChange={(e) => setForm({ ...form, username: e.target.value })} />
        </label>
        <label>
          <span>Email*</span>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </label>
        <label>
          <span>Phone*</span>
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
        </label>
        <label>
          <span>Website</span>
          <input value={form.website ?? ""} onChange={(e) => setForm({ ...form, website: e.target.value })} />
        </label>
      </div>
      <div className="actions">
        <button type="submit" disabled={submitting}>{submitting ? "Saving..." : (initial?.id ? "Save Changes" : "Create User")}</button>
        {onCancel && <button type="button" className="secondary" onClick={onCancel} disabled={submitting}>Cancel</button>}
      </div>
    </form>
  );
}