import { promisify } from 'util'
import { exec } from 'child_process'
const _exec = promisify(exec)

/**
 * Executes a shell command and returns an object that contains the standard output and standard error.
 * @remarks This function is asynchronous and returns a Promise.
 * @param command The shell command to execute.
 * @returns A Promise that resolves to an object with `stdout` and `stderr` properties.
 * @throws Will throw an error if the command execution fails.
 * @example ```ts
 * executeCommand('ls -la')
 *   .then(result => result.stdout);
 * //=> "expected stdout result"
 *   .catch(error => error.stderr);;
 * //=> "expected stderr result"
 * ```
 */
export async function executeCommand(command: string): Promise<{
  stdout: string
  stderr: string
}> {
  return await _exec(command)
}
