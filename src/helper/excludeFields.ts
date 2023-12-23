// Exclude keys from user
export function excludeFields<User, Key extends keyof User>(
  data: any,
  keys: string[]
) {
  return Object.fromEntries(
    Object.entries(data).filter(([key]) => !keys.includes(key))
  );
}
