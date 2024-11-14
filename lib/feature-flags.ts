interface FeatureFlags {
  storeClosed: boolean
}

const featureFlags: FeatureFlags = {
  storeClosed: true,
}

export async function get(key: keyof FeatureFlags) {
  return featureFlags[key]
}

export async function set(key: keyof FeatureFlags, value: boolean) {
  featureFlags[key] = value
  return true
}
